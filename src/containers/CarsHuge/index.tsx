import * as React from "react";
import {Table} from "react-bootstrap";
import {connect} from "react-redux";
import {loadInfo} from "../../actions/CarsHugeActions";
import Row from "../../components/Row";
import {ICarsHuge} from "../../reducers/CarsHugeReducer";
import {getData} from "../../selectors";

interface ICar {
    id: string,
    vin: string,
    brand: string
    year: number,
    color: string,
}

interface IProps {
    carsHuge: ICarsHuge;

    nextPageAction(page: number): void;
}

class Cars extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    public onClickHandler() {
        this.props.nextPageAction(this.props.carsHuge.page + 1);
    }

    public renderTemplate = () => {
        return this.props.carsHuge.data.length;
    };

    public render() {
        return (
            <div>
                <div>
                    <Table>
                        <tbody>
                        <tr>
                            <th>vin</th>
                            <th>brand</th>
                            <th>year</th>
                            <th>color</th>
                        </tr>
                        {this.props.carsHuge.data.map( (car: ICar) => <Row key={car.vin} car={car}/>)}
                        </tbody>
                    </Table>
                </div>
                <div>
                    {this.props.carsHuge.isFetching ? <p>Загрузка...</p> :
                        <p>Мы на {this.props.carsHuge.page} странице.</p>}
                    <br/>
                    <button onClick={this.onClickHandler}>NEXT PAGE</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store: any) => ({
    carsHuge: getData(store)
});

const mapDispatchToProps = (dispatch: any) => ({
    nextPageAction: (page: number) => dispatch(loadInfo(page))
});

export const CarsHuge = connect(mapStateToProps, mapDispatchToProps)(Cars);

