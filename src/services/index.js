
import axios from 'axios';
import * as action from '../actions';

const endPoint = 'http://localhost:3001/users';

const mockUsers = [
    {
        id: 1,
        name: "Clara",
        lastname: "Oswald",
        email: "calra_oswin@hotmail.com",
        picture: 'http://s3.narvii.com/image/kb75hqre7ln4bim7ieeyid6kkoapdvra_00.jpg',
        isActive: true
    },
    {
        id: 2,
        name: "Rory",
        lastname: "Williams",
        email: "iamrory@gmail.com",
        picture: 'https://pbs.twimg.com/profile_images/3515743372/9f35ec8c9701dc5f1e643fe04c0083ea_400x400.png',
        isActive: true
    },
    {
        id: 3,
        name: "Amy",
        lastname: "Pond",
        email: "amypond@yahoo.com",
        picture: 'https://pm1.narvii.com/5837/7a02e83708994984304568425246edb6a7f0bd94_hq.jpg',
        isActive: false
    },
    {
        id: 4,
        name: "Rose",
        lastname: "Tyler",
        email: "white_wolf@gmail.com",
        picture: 'https://www.doctorwhotv.co.uk/wp-content/uploads/rose-doomsday-died-opener-570x333.jpg',
        isActive: true
    }
];

const buildEndPoint = (filters) => {

    if( filters.all ){
        return endPoint + `?_page=${filters.page}&_limit=5`;
    }

    return endPoint + `?_page=${filters.page}&_limit=5&isActive=${filters.active}`;
};

export const getData = (dispatch, filters) => {

    axios.get(buildEndPoint(filters))
    .then(resp => {

        dispatch(action.getUsers(resp.data));

    }).catch(error => {
        
        dispatch(action.getUsers(mockUsers));
    
    });

};

export const deleteUser = (dispatch, id) => {

    axios.delete(endPoint + `/${id}`)
    .then( resp => {

        if( resp.status === 200){

        dispatch( action.deleteUser(id) );

        }

    });

};

export const updateUser = (dispatch, data) => {

    axios.put(endPoint + `/${data.id}`, data)
    .then(resp => {

        if( resp.status === 200 ){

            dispatch(action.updateUser(data));

        }

    });

};

export const newUser = (dispatch, data) => {

    axios.post(endPoint, data)
    .then(resp => {
        
        if(resp.status === 201){
        dispatch(action.addUser(resp.data));
        }

    });

};

export const openModal = (dispatch) => {
    dispatch(action.openModal());
};

export const closeModal = (dispatch) => {
    dispatch(action.closeModal());
};

export const getUserById = async (id) => {
    
    try {
        const resp = await axios.get(endPoint+'/'+id);

        return resp.data;
    } catch {
        return null;
    }

};

export const getOnline = (dispatch) => {

    axios.get(endPoint)
    .then(resp => {

        let online = resp.data.filter((user)=>{
            return user.isActive;
        });
        dispatch(action.getUsers(online));

    }).catch(() => {
        
        let online = mockUsers.filter((user)=>{
            return user.isActive;
        });
        dispatch(action.getUsers(online));
    
    });

};

export const getOffline = (dispatch) => {

    axios.get(endPoint)
    .then(resp => {

        let offline = resp.data.filter((user)=>{
            return !user.isActive;
        });
        dispatch(action.getUsers(offline));

    }).catch(() => {
        
        let offline = mockUsers.filter((user)=>{
            return !user.isActive;
        });
        dispatch(action.getUsers(offline));
    
    });

};

export const changeData = (dispatch, filters ) => {

    dispatch(action.newFiltered(filters));

    axios.get(buildEndPoint(filters))
    .then(resp => {

        dispatch(action.getUsers(resp.data));

    }).catch(error => {
        
        dispatch(action.getUsers(mockUsers));
    
    });
   
};