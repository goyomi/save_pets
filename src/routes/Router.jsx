import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from '../pages/LoadingPage/Loading';
import Home from '../pages/HomePage/Home';
import Search from '../pages/SearchPage/Search';
import Join from '../pages/JoinPage/Join';
import ChatLists from '../pages/ChatPage/ChatLists';
import ChatRoom from '../pages/ChatPage/ChatRoom';
import ProfileSetting from '../pages/JoinPage/ProfileSetting';
import Login from '../pages/LoginPage/Login';
import ProfileEdit from '../pages/ProfilePage/ProfileEdit';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import MyProfile from '../pages/ProfilePage/MyProfile';
import YourProfile from '../pages/ProfilePage/YourProfile';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 849f289 (add: IconHeader 구현을 위해 임의로 생성 #50)
=======
>>>>>>> 24a8e0c (fix: product/edit 경로 추가)
=======
>>>>>>> 3eb466a (add: IconHeader 구현을 위해 임의로 생성 #50)
=======
>>>>>>> d7c28f2 (fix: product/edit 경로 추가)
import AddProduct from '../pages/ProductPage/AddProduct';
import FollowList from '../pages/FollowListPage/FollowList';
import PostUpload from '../pages/PostPage/PostUpload';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import EditProduct from './../pages/ProductPage/EditProduct';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 8747cf8 (fix: product/edit 경로 추가)
=======
>>>>>>> 7650e4e (add: IconHeader 구현을 위해 임의로 생성 #50)
=======
import Icon from './../pages/ProfilePage/Icon';
>>>>>>> 168f150 (add: IconHeader 구현을 위해 임의로 생성 #50)
=======
import EditProduct from './../pages/ProductPage/EditProduct';
>>>>>>> 8747cf8 (fix: product/edit 경로 추가)
=======
=======
>>>>>>> 3eb466a (add: IconHeader 구현을 위해 임의로 생성 #50)
=======
import MyProfile from '../pages/ProfilePage/MyProfile';
import YourProfile from '../pages/ProfilePage/YourProfile';
>>>>>>> 0d10278 (add: IconHeader 구현을 위해 임의로 생성 #50)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 849f289 (add: IconHeader 구현을 위해 임의로 생성 #50)
=======
=======
>>>>>>> d7c28f2 (fix: product/edit 경로 추가)
=======
import MyProfile from '../pages/ProfilePage/MyProfile';
import YourProfile from '../pages/ProfilePage/YourProfile';
=======
import AddProduct from '../pages/ProductPage/AddProduct';
import FollowList from '../pages/FollowListPage/FollowList';
import PostUpload from '../pages/PostPage/PostUpload';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import EditProduct from './../pages/ProductPage/EditProduct';
>>>>>>> 8747cf8 (fix: product/edit 경로 추가)
<<<<<<< HEAD
>>>>>>> 97e7327 (fix: product/edit 경로 추가)
<<<<<<< HEAD
>>>>>>> 24a8e0c (fix: product/edit 경로 추가)
=======
=======
=======
>>>>>>> 7650e4e (add: IconHeader 구현을 위해 임의로 생성 #50)
>>>>>>> baf1c97 (add: IconHeader 구현을 위해 임의로 생성 #50)
>>>>>>> 23796c1 (add: IconHeader 구현을 위해 임의로 생성 #50)
=======
import Icon from './../pages/ProfilePage/Icon';
>>>>>>> 168f150 (add: IconHeader 구현을 위해 임의로 생성 #50)
=======
import EditProduct from './../pages/ProductPage/EditProduct';
>>>>>>> 8747cf8 (fix: product/edit 경로 추가)
=======
>>>>>>> 3eb466a (add: IconHeader 구현을 위해 임의로 생성 #50)
=======
=======
>>>>>>> fca3dd8 (add: IconHeader 구현을 위해 임의로 생성 #50)
import EditProduct from './../pages/ProductPage/EditProduct';
>>>>>>> 8747cf8 (fix: product/edit 경로 추가)
<<<<<<< HEAD
>>>>>>> 97e7327 (fix: product/edit 경로 추가)
<<<<<<< HEAD
>>>>>>> d7c28f2 (fix: product/edit 경로 추가)
=======
=======
=======
>>>>>>> 7650e4e (add: IconHeader 구현을 위해 임의로 생성 #50)
>>>>>>> baf1c97 (add: IconHeader 구현을 위해 임의로 생성 #50)
>>>>>>> fca3dd8 (add: IconHeader 구현을 위해 임의로 생성 #50)

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loading />} />
        <Route path='/home' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/chat' element={<ChatLists />} />
        <Route path='/chat/room' element={<ChatRoom />} />
        <Route path='/join/profile' element={<ProfileSetting />} />
        <Route path='/post' element={<PostUpload />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/profile/:accountname' element={<ProfilePage />} />
        <Route path='/profile/edit' element={<ProfileEdit />} />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        <Route path='/product' element={<AddProduct />} />
        <Route path='/product/edit' element={<EditProduct />} />
        <Route path='/follow/:accountname/:type' element={<FollowList />} />
>>>>>>> 8747cf8 (fix: product/edit 경로 추가)
=======
        <Route path='/profile/icon' element={<Icon />} />
>>>>>>> 168f150 (add: IconHeader 구현을 위해 임의로 생성 #50)
=======
=======
>>>>>>> 24a8e0c (fix: product/edit 경로 추가)
=======
>>>>>>> d7c28f2 (fix: product/edit 경로 추가)
        <Route path='/product' element={<AddProduct />} />
        <Route path='/product/edit' element={<EditProduct />} />
        <Route path='/follow/:accountname/:type' element={<FollowList />} />
=======
>>>>>>> 0d10278 (add: IconHeader 구현을 위해 임의로 생성 #50)
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 849f289 (add: IconHeader 구현을 위해 임의로 생성 #50)
=======
=======
>>>>>>> d7c28f2 (fix: product/edit 경로 추가)
=======
=======
        <Route path='/product' element={<AddProduct />} />
        <Route path='/follow/:accountname/:type' element={<FollowList />} />
>>>>>>> 8747cf8 (fix: product/edit 경로 추가)
>>>>>>> 97e7327 (fix: product/edit 경로 추가)
<<<<<<< HEAD
>>>>>>> 24a8e0c (fix: product/edit 경로 추가)
=======
        <Route path='/profile/icon' element={<Icon />} />
>>>>>>> 168f150 (add: IconHeader 구현을 위해 임의로 생성 #50)
=======
        <Route path='/product' element={<AddProduct />} />
        <Route path='/product/edit' element={<EditProduct />} />
        <Route path='/follow/:accountname/:type' element={<FollowList />} />
=======
>>>>>>> 0d10278 (add: IconHeader 구현을 위해 임의로 생성 #50)
>>>>>>> 3eb466a (add: IconHeader 구현을 위해 임의로 생성 #50)
=======
>>>>>>> d7c28f2 (fix: product/edit 경로 추가)
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
