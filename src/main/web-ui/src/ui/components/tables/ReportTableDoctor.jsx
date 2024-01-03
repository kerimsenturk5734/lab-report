import React from 'react'

export default function ReportTableDoctor() {
    return (
        <table className="table table-borderless mb-0">
            <thead>
                <tr>

                    <th scope="col">DATE</th>
                    <th scope="col">TITLE</th>
                    <th scope="col">PATIENT ID</th>
                    <th scope="col">STATUS</th>
                    <th scope="col">PATHOLOGICAL REPORT</th>
                    <th scope="col">DIAGNOSTIC REPORT</th>
                    <th scope="col">ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>61</td>
                    <td>Edinburgh</td>
                    <td className='d-flex'>
                        <button type="button" className="btn btn-danger btn-sm px-3">
                            <i className="fas fa-times"></i>
                        </button>
                        <button type="button" className="btn btn-warning btn-sm px-3">
                            <i className="fas fa-times"></i>
                        </button>
                        <button type="button" className="btn btn-info btn-sm px-3">
                            <i className="fas fa-times"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                    
                    <td>Sonya Frost</td>
                    <td>Software Engineer</td>
                    <td>23</td>
                    <td>Edinburgh</td>
                    <td>
                        <button type="button" className="btn btn-danger btn-sm px-3">
                            <i className="fas fa-times"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                    
                    <td>Jena Gaines</td>
                    <td>Office Manager</td>
                    <td>30</td>
                    <td>London</td>
                    <td>
                        <button type="button" className="btn btn-danger btn-sm px-3">
                            <i className="fas fa-times"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                    
                    <td>Quinn Flynn</td>
                    <td>Support Lead</td>
                    <td>22</td>
                    <td>Edinburgh</td>
                    <td>
                        <button type="button" className="btn btn-danger btn-sm px-3">
                            <i className="fas fa-times"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                    
                    <td>Charde Marshall</td>
                    <td>Regional Director</td>
                    <td>36</td>
                    <td>San Francisco</td>
                    <td>
                        <button type="button" className="btn btn-danger btn-sm px-3">
                            <i className="fas fa-times"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                  
                    <td>Haley Kennedy</td>
                    <td>Senior Marketing Designer</td>
                    <td>43</td>
                    <td>London</td>
                    <td>
                        <button type="button" className="btn btn-danger btn-sm px-3">
                            <i className="fas fa-times"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                
                    <td>Tatyana Fitzpatrick</td>
                    <td>Regional Director</td>
                    <td>19</td>
                    <td>Warsaw</td>
                    <td>
                        <button type="button" className="btn btn-danger btn-sm px-3">
                            <i className="fas fa-times"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
