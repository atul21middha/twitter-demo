import {combineReducers} from "redux";
import Common from './Common';
import Auth from "./Auth";
import TimeLine from "./TimeLine";

export default combineReducers({
  common: Common,
  auth: Auth,
  timeline: TimeLine
})