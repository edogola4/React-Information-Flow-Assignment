import React from "react";


function Filter({ onCategoryChange }) {
    return (
        <div className="Filter">
            <label htmlFor="filter">
                Filter by category:
            </label>
            <select
                id="category"
                onChange={(e) => onCategoryChange(e.target.value)}>
                <option value="All">All</option>
                <option value="Dairy">Dairy</option>
                <option value="Produce">Produce</option>
                <option value="Bakery">Bakery</option>
            </select>
        </div>
    );
}
export default Filter;