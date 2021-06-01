
export const openModal = () => {
    return {
        type: 'OPEN_MODAL',
    }
};

export const closeModal = () => {
    return {
        type: 'CLOSE_MODAL',
    }
};

export const getUsers = (posts) => {
    return {
        type: 'INITIALIZE',
        payload: posts,
    }
};

export const addUser = (userData) => {
    return {
        type: 'ADD_USER',
        payload: userData,
    }
};

export const deleteUser = (id) => {
    return {
        type: 'DELETE_USER',
        payload: id,
    }
};

export const updateUser = (changedPost) => {
    return {
        type: 'UPDATE_USER',
        payload: changedPost,
    }
};