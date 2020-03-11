import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .connect()
    .use(reactotronRedux())
    .use(reactotronSaga());

  tron.clear();

  console.tron = tron;
}
