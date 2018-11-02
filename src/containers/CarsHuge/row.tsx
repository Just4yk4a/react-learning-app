import * as React from 'react';

interface IProps {
    car: any;
}

export default class Row extends React.Component<IProps, {}> {

    public render() {
        const car = this.props.car;
        return (
            <tr>
                <td>{car.vin}</td>
                <td>{car.brand}</td>
                <td>{car.year}</td>
                <td>{car.color}</td>
            </tr>
        );
    }
}