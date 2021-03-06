import {nickName} from './user/profile/nickname';
import {contactsList} from './user/contacts/getList';
import {countRoomHistory} from './client/countRoomHistory';
import {combineReducers} from 'redux';
import {gender} from './user/profile/gender';
import {email} from './user/profile/email';
import {bio} from './user/profile/bio';
import {getMemberList} from './rooms/getMemberList';
import {rule} from './user/privacy/rule';
import {blockUser} from './user/contacts/block';
import {userSession} from './user/session';
import {selfRemove} from './user/profile/selfRemove';
import {getAvatarList} from './rooms/getAvatarList';
import {getActionList} from './rooms/getActionList';
import {callAction} from './signaling/callAction';
import {callLog} from './signaling/callLog';
import {passwordDetail} from './user/twoStep/passwordDetail';


const methodsReducer = combineReducers({
  nickName,
  contactsList,
  gender,
  email,
  bio,
  countRoomHistory,
  getMemberList,
  rule,
  blockUser,
  userSession,
  selfRemove,
  getAvatarList,
  getActionList,
  callAction,
  callLog,
  passwordDetail,
});
export default methodsReducer;
