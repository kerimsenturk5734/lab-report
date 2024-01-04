import React, {useState} from 'react';
import {MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle} from "mdb-react-ui-kit";

export default function TooledSearchBar(
    {
        LeftDropDown = DropDown,
        RightDropDown = DropDown,
        onSearch = query => {},
    }) {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        onSearch(query); // Pass the search query to the callback
    };

    return (
        <div className="d-flex justify-content-between m-3 gap-3">
            {LeftDropDown}
            <input
                type="text"
                className="form-control"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
            />
            {RightDropDown}
        </div>
    );
}

export function DropDown({title = String(), actions = Array()}){
    return (
        <MDBDropdown>
            <MDBDropdownToggle caret color="primary">
                {title}
            </MDBDropdownToggle>
            <MDBDropdownMenu className={"dropdown-menu"}>
                {actions.map((item) => (
                    <MDBDropdownItem className="dropdown-item" href="#">{item}</MDBDropdownItem>
                ))}
            </MDBDropdownMenu>
        </MDBDropdown>

    )
}

