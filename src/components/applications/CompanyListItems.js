import React from "react";
import { Card, CardBody, Badge, CustomInput } from "reactstrap";
import { NavLink } from "react-router-dom";

import { Colxx } from "../common/CustomBootstrap";
import * as moment from 'moment'


const CompanyListItems = ({ item, CWC, handleCheckChange, isSelected }) => {
  return (
    <Colxx xxs="12">
      <Card
        className="card d-flex flex-row mb-3"
      >
        <div className="d-flex flex-grow-1 min-width-zero">
          <CardBody className={"align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center"}>
            <NavLink
              to={`/app/editcompany`}
              className="list-item-heading mb-0 truncate w-40 w-xs-450  mb-1 mt-1"
            >
              <i
                className={`${
                  item.activated === true
                    ? "simple-icon-check heading-icon"
                    : "simple-icon-refresh heading-icon"
                  }`}
              />
              <span className="align-middle d-inline-block">{item.name}</span>
            </NavLink>
            <p className="mb-1 text-muted text-small w-15 w-xs-100">
              {item.country.name}
            </p>

            <p className="mb-1 text-muted text-small w-15 w-xs-100">
              {moment(item.createDate).format('DD.MM.YYYY')}
            </p>
            <div className="w-15 w-xs-100">
              <Badge color={item.activated === true
                ? "primary"
                : (item.deleted === true? ("info") : ("secondary"))} pill>
                {item.activated === true
                  ? "ACTIVATED"
                  : (item.deleted === true? ("DELETED") : ("WAITING FOR ACTIVATION"))}
              </Badge>
            </div>
          </CardBody>
          <div className="custom-control custom-checkbox pl-1 align-self-center mr-4">
            <CustomInput
              className="itemCheck mb-0"
              type="checkbox"
              id={item.companyId}
              checked={isSelected}
              onChange={event => handleCheckChange(event, item.companyId)}
              label=""
            />

          </div>
          <Badge
            className="selectedLight"
            color={item.companyId == CWC
              ? "secondary"
              : ""} pill>
            {item.companyId == CWC
              ? " "
              : " "}
          </Badge>
        </div>
      </Card>
    </Colxx >
  );
};

export default React.memo(CompanyListItems);
