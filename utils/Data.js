import {storeDataLocally} from './localStorage';

const getData = async (route, token, localName, storeLocally) => {
  return await fetch(`${process.env.BASE_URL}${route}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => res.json())
    .then(async res => {
      if (storeLocally) await storeDataLocally(localName, res);
      return res;
    })
    .catch(e => {
      // ToastAndroid.show('Some Error Occured', ToastAndroid.BOTTOM);
      console.log(e, 'error', e.code);
    });
};

const postData = async (route, data) => {
  return await fetch(`${process.env.BASE_URL}${route}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(async res => {
      return res;
    })
    .catch(e => {
      // ToastAndroid.show('Some Error Occured', ToastAndroid.BOTTOM);
      console.log(e, 'error', e.code);
    });
};

const postCrop = async (route, token, data) => {
  return await fetch(`${process.env.BASE_URL}${route}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(async res => {
      return res;
    })
    .catch(e => {
      // ToastAndroid.show('Some Error Occured', ToastAndroid.BOTTOM);
      console.log(e, 'error', e.code);
    });
};

const updatePost = async (token, postId, action) => {
  return await fetch(
    `${process.env.BASE_URL}/post/${postId}?action=${action}`,
    {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  )
    .then(res => res.json())
    .then(async res => {
      return res;
    })
    .catch(e => {
      // ToastAndroid.show('Some Error Occured', ToastAndroid.BOTTOM);
      console.log(e, 'error', e.code);
    });
};
const updatePostWithComment = async (token, postId, comment) => {
  return await fetch(
    `${process.env.BASE_URL}/post/${postId}?action=addComment`,
    {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(comment),
    },
  )
    .then(res => res.json())
    .then(async res => {
      return res;
    })
    .catch(e => {
      // ToastAndroid.show('Some Error Occured', ToastAndroid.BOTTOM);
      console.log(e, 'error', e.code);
    });
};

export {getData, postData, postCrop, updatePost, updatePostWithComment};
