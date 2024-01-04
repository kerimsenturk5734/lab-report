import React from 'react';

function TableHead({heads}) {
    return (
        <tr>
            {
                heads.map((val, index) => {
                    return (
                        <th className="text-center" scope="col">
                            {val.toUpperCase()}
                            <hr/>
                        </th>
                    )

                })
            }

        </tr>
    );
}

export default TableHead;