import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StoreProvider } from "store/";

const Home = lazy(() => import("containers/home/Home"));

const Contact = React.lazy(() => import("containers/contact/Contact"));
const ProductDetail = React.lazy(() =>
  import("containers/products/ProductDetail")
);
const ProductCategory = React.lazy(() =>
  import("containers/products/ProductCategory")
);
const PostList = React.lazy(() => import("containers/post/PostList"));
const PostDetail = React.lazy(() => import("containers/post/PostDetails"));
const Login = React.lazy(() => import("containers/login/Login"));
const Register = React.lazy(() => import("containers/register/Register"));
const FogotPass = React.lazy(() => import("containers/forgotPass/fogotPass"));
const DashBoard = React.lazy(() => import("containers/dashboard/DashBoard"));
const PostDashBoard = React.lazy(() =>
  import("containers/dashboard/pages/postList/PostList")
);
const ProfileListDashBoard = React.lazy(() =>
  import("containers/dashboard/pages/profileList/profileList")
);
const SettingDashBoard = React.lazy(() =>
  import("containers/dashboard/pages/setting/Setting")
);
const HomeDashBoard = React.lazy(() =>
  import("containers/dashboard/pages/Home/Home")
);
const AddUser = React.lazy(() =>
  import("containers/dashboard/pages/profile/compoent/addUser/AddUser")
);
const AddPost = lazy(() =>
  import("containers/dashboard/pages/postList/compoent/addUser/AddPost")
);
const ProfileDashBoard = React.lazy(() =>
  import("containers/dashboard/pages/profile/Profile")
);

function App() {
  return (
    
    <div className="App">
      <StoreProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="contact" element={<Contact />} />

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

              <Route path="admin/dashboard" element={<DashBoard />}>
                <Route path="home" element={<HomeDashBoard />} />
                <Route path="profile" element={<ProfileDashBoard />} />
                <Route path="adduser" element={<AddUser />} />
                <Route path="posts" element={<PostDashBoard />} />
                <Route path="addpser" element={<AddPost />} />
                <Route path="setting" element={<SettingDashBoard />} />
                <Route path="profile-list" element={<ProfileListDashBoard />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </StoreProvider>
    </div>

  );
}

export default App;
