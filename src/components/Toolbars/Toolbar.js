import React from "react";
import { CSVLink } from "react-csv";
import { NavLink } from "react-router-dom";

const Toolbar = ({
  onInputSearch,
  search,
  filterActive,
  csvData,
  fileName,
  actionButton,
}) => {
  return (
    <>
      <div className="filter">
        <div className="inner-filter">
          <div className="filter-text">
            <span>Filter:</span>
          </div>
          {filterActive && (
            <div className="slect-user">
              <div class="input-group">
                <select
                  class="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                >
                  <option selected>All</option>
                  <option value="1">Basic User</option>
                  <option value="2">Normal Users</option>
                </select>
              </div>
            </div>
          )}
          <div className="manage-search">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              onChange={(e) => onInputSearch(e.target.value)}
              value={search}
            />
            <div className="reset-btn">
              <button
                className="btn btn-primary"
                onClick={(e) => onInputSearch("")}
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        <div className="action-btn">
          {actionButton && (
            <NavLink to={actionButton.link}>
              <button className="btn btn-primary mr-3">
                {actionButton.title}
              </button>
            </NavLink>
          )}
          <CSVLink
            data={csvData}
            filename={fileName}
            className="btn btn-primary"
            target="_blank"
          >
            Export As Csv
          </CSVLink>
        </div>
      </div>
    </>
  );
};

export default Toolbar;
