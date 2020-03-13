import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
// import AppActions from '../actions/appActions';


function RootContainer({ width, children }) {
    // const dispatch = useDispatch();

    // set screen size
    useEffect(() => {
        console.log('width :', width);
        // if (isWidthDown('xs', width)) dispatch(AppActions.setScreenSize('mobile', width));
        // else if (isWidthDown('md', width)) dispatch(AppActions.setScreenSize('tablet', width));
        // else dispatch(AppActions.setScreenSize('desktop', width))
	}, [width]);


    return children;
}

export default withWidth()(RootContainer);