import * as React from "react";
import {ListGroup, ListGroupItem} from "react-bootstrap";

export default class List extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <ListGroup>
                    <ListGroupItem href="/list/cars-huge">Cars-huge</ListGroupItem>
                </ListGroup>
            </div>
        );
    };
}