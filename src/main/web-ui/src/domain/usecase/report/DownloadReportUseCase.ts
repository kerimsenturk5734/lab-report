import {useState} from "react";
import reportDao from "../../../data/api/dao/ReportDao";

//HTTP 401, 403, 404, 200, 400
export const useDownloadReport = () => {
    const [state, setState] = useState({
        successMessage:'',
        error: {},
        errorMessage:'',
        isLoading: false,
    });

    const downloadReport = async (reportId : string) => {
        setState({ ...state, isLoading: true });

        const download = (blob:Blob, fileName : string) => {
            const a = document.createElement('a');
            let url = URL.createObjectURL(blob);

            a.href = url
            a.download = fileName;

            a.click();

            URL.revokeObjectURL(url)
        }

        const extractFileName = (res : any) : string => {
            let contentDispositionHeader = res.headers['content-disposition'];
            let matches = contentDispositionHeader.match(/filename="(.+)"|filename=([^;]+)/);
            return  matches && (matches[1] || matches[2]);
        }

        await reportDao.getReportBlobById(reportId)
            .then((res) => {
                download(res.data , extractFileName(res) )
                setState({
                    ...state,
                    successMessage: "Report downloaded successfully",
                    isLoading: false
                });
            })
            .catch((err) => {
                console.log(err)

                if(err.code == "ERR_NETWORK"){
                    setState({
                        ...state,
                        error: err,
                        errorMessage: err.message,
                        isLoading: false
                    })
                }
                else if(err.response.status == 401){
                    setState({
                        ...state,
                        error: err,
                        errorMessage: 'Authentication Required',
                        isLoading: false
                    });
                }
                else if(err.response.status == 403){
                    setState({
                        ...state,
                        error: err,
                        errorMessage: 'Access Denied',
                        isLoading: false
                    });
                }
                else if(err.response.status == 400){
                    setState({
                        ...state,
                        error: err,
                        errorMessage: JSON.stringify(err.response.data, null, 4),
                        isLoading: false
                    });
                }
                else{
                    setState({
                        ...state,
                        error: err,
                        errorMessage: err.response.data.message,
                        isLoading: false
                    });
                }
            })
    };

    return { state, downloadReport };
};