import * as React from "react";
import {connect} from "react-redux";
import {loadInfo} from "../../actions/CarsHugeActions";

interface IProps {
    page: number;
    isFetching: boolean;
    data: [];

    nextPageAction(page: number): void;
}

class Cars extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    public onClickHandler() {
        this.props.nextPageAction(this.props.page + 1);
    }

    public render() {
        return (
            <div>
                {this.props.isFetching ? <p>Загрузка...</p> : <p>Мы на {this.props.page} странице.</p>}
                <br/>
                <button onClick={this.onClickHandler}>NEXT PAGE</button>
            </div>
        );
    }
}

const mapStateToProps = (store: any) => ({
    data: store.carsHuge.data,
    isFetching: store.carsHuge.isFetching,
    page: store.carsHuge.page
});

const mapDispatchToProps = (dispatch: any) => ({
    nextPageAction: (page: number) => dispatch(loadInfo(page))
});

export const CarsHuge = connect(mapStateToProps, mapDispatchToProps)(Cars);

