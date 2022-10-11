import React, { lazy, Suspense, useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchConfigs } from "store/configs/action";
import { store } from "store/store";
import { useAppDispatch } from "helpers/hooks/reduxHooks";

const Home = lazy(() => import("../src/containers/home/Home"));
const Introduce = lazy(() => import("containers/introduce/Introduce"));
const Contact = React.lazy(() => import("../src/containers/contact/Contact"));
const ProductDetail = React.lazy(
  () => import("../src/containers/products/ProductDetail")
);
const ProductCategory = React.lazy(
  () => import("../src/containers/products/ProductCategory")
);
const PostList = React.lazy(() => import("../src/containers/post/PostList"));
const PostDetail = React.lazy(
  () => import("../src/containers/post/PostDetails")
);
const Login = React.lazy(() => import("../src/containers/login/Login"));
const Register = React.lazy(
  () => import("../src/containers/register/Register")
);
const FogotPass = React.lazy(
  () => import("../src/containers/forgotPass/fogotPass")
);
// const DashBoard = React.lazy(() => import("../src/containers/dashboard/DashBoard"));
// const PostDashBoard = React.lazy(() =>
//   import("../src/containers/dashboard/pages/postList/PostList")
// );
// const ProfileListDashBoard = React.lazy(() =>
//   import("../src/containers/dashboard/pages/profileList/profileList")
// );
// const SettingDashBoard = React.lazy(() =>
//   import("../src/containers/dashboard/pages/setting/Setting")
// );
// const HomeDashBoard = React.lazy(() =>
//   import("../src/containers/dashboard/pages/Home/Home")
// );
// const AddUser = React.lazy(() =>
//   import("../src/containers/dashboard/pages/profile/compoent/addUser/AddUser")
// );
// const AddPost = lazy(() =>
//   import("../src/containers/dashboard/pages/postList/compoent/addUser/AddPost")
// );
// const ProfileDashBoard = React.lazy(() =>
//   import("../src/containers/dashboard/pages/profile/Profile")
// );

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchConfigs({}));
  }, [dispatch]);

  return (
    <div className="App">
      <Suspense fallback={"Loading..."}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="introduce" element={<Introduce />} />
              <Route
                path="product-category/:productCategoryId"
                element={<ProductCategory />}
              />
              <Route path="product/:productId" element={<ProductDetail />} />

              <Route
                path="post-category/:postCategoryId"
                element={<PostList />}
              />
              <Route path="post/:postId" element={<PostDetail />} />

              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="forgot" element={<FogotPass />} />

              {/* <Route path="admin/dashboard" element={<DashBoard />}>
                <Route path="home" element={<HomeDashBoard />} />
                <Route path="profile" element={<ProfileDashBoard />} />
                <Route path="adduser" element={<AddUser />} />
                <Route path="posts" element={<PostDashBoard />} />
                <Route path="addpser" element={<AddPost />} />
                <Route path="setting" element={<SettingDashBoard />} />
                <Route path="profile-list" element={<ProfileListDashBoard />} />
              </Route> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default App;
