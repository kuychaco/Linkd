import keyMirror from 'keymirror';

export default {

  ActionTypes: keyMirror({
    RECEIVE_RAW_GROUPS: null,
    UPDATE_SELECTED_GROUP: null,
    CREATE_GROUP: null,
    RECEIVE_RAW_CREATED_GROUP: null,
    ADD_USER_TO_GROUP: null,
    RECEIVE_GROUP_MEMBERS: null
  })

};