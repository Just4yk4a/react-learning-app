import * as React from "react";
import {Table} from "react-bootstrap";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {loadInfo} from "../../store/CarsHuge/actions";
import {ICarsHuge} from "../../store/CarsHuge/reducers";
import {getData} from "../../store/CarsHuge/selectors";
import Row from "./row";

export interface ICar {
    id: string,
    vin: string,
    brand: string
    year: number,
    color: string,
}

export interface IProps {
    carsHuge: ICarsHuge;

    loadPage(page: number): void;
}

class Cars extends React.Component<IProps, {}> {
    public value: any;

    constructor(props: IProps) {
        super(props);
        this.nextPageHandler = this.nextPageHandler.bind(this);
        this.backPageHandler = this.backPageHandler.bind(this);
        this.currentPageHandler = this.currentPageHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    public nextPageHandler() {
        this.props.loadPage(this.props.carsHuge.page + 1);
    }

    public backPageHandler() {
        this.props.loadPage(this.props.carsHuge.page - 1);
    }

    public currentPageHandler() {
        this.props.loadPage(parseInt(this.value, 10));
    }

    public componentDidMount() {
        this.props.loadPage(this.props.carsHuge.page);
    }

    public changeHandler(event: any) {
        this.value = event.target.value;
    }

    public render() {
        const {page, data, error, isFetching, countPage} = this.props.carsHuge;
        return (
            <div>
                <Link to="/list">BACK</Link>
                <div>
                    <Table>
                        <tbody>
                        <tr>
                            <th>vin</th>
                            <th>brand</th>
                            <th>year</th>
                            <th>color</th>
                        </tr>
                        {error !== "" ? null : data.map((car: ICar) => <Row key={car.vin} car={car}/>)}
                        </tbody>
                    </Table>
                </div>
                <div>
                    {error !== "" ? error : null}
                    <br/>
                    {isFetching ? <p>Загрузка...</p> :
                        <p>Мы на {(page)} странице из {countPage}.</p>}
                    <button onClick={this.backPageHandler}>BACK PAGE</button>
                    <button onClick={this.nextPageHandler}>NEXT PAGE</button>
                    <br/>
                    <input type="text" onChange={this.changeHandler} placeholder={page.toString()}/>
                    <button onClick={this.currentPageHandler}>GO</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store: any) => ({
    carsHuge: getData(store)
});

const mapDispatchToProps = (dispatch: any) => ({
    loadPage: (page: number) => dispatch(loadInfo(page))
});

export const CarsHuge = connect(mapStateToProps, mapDispatchToProps)(Cars);

