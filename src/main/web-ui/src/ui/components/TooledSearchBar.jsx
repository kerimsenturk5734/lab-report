import React, {useState} from 'react';
import {MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle} from "mdb-react-ui-kit";

export default function TooledSearchBar(
    {
        LeftDropDown = DropDown,
        RightDropDown = DropDown,
        onSearch = query => {},
        placeHolder = "Search..."
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
                placeholder={placeHolder}
                value={searchQuery}
                onChange={handleSearchChange}
            />
            {RightDropDown}
        </div>
    );
}

export function DropDown({title = String(), actions = []}){
    return (
        <MDBDropdown>
            <MDBDropdownToggle color="primary">
                {title}
            </MDBDropdownToggle>
            <MDBDropdownMenu className={"dropdown-menu"}>
                {actions.map((action, index) => (
                    <div key={index}>
                        {action}
                    </div>
                ))}
            </MDBDropdownMenu>
        </MDBDropdown>

    )
}
export function DropDownAction({title = String(), onSelect = () => {}}){
    return (
        <MDBDropdownItem
            onClick={onSelect}
            className="dropdown-item"
            href="#"
        >
            {title}
        </MDBDropdownItem>
    )
}
export function getDropDownActions({actionData, onSelect = (val) => {}}){
    return Object.entries(actionData).map(([key,value]) => (
        <div key={key}>
            {DropDownAction({title: value, onSelect: () => {onSelect(value)}})}
        </div>
    ))
}
