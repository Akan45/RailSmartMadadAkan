import { React, useState, useRef } from "react";
import img from "../assets/images/profileimg.png";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useFormik } from "formik";
import * as Yup from "yup";
import { profileValidation } from "../helper/validate";
import convertToBase64 from "../helper/convert";

const Profile = () => {
  const [file, setFile] = useState();

  // const navigate = useNavigate();
   const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  // const [formData, setFormData] = useState({
  //   username: "",
  //   email: "",
  //   phNo: "",
  //   password: "",
  //   profilePicture: null,
  // });
  const fileInputRef = useRef(null);
  
  const formik = useFormik({
    initialValues: {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      phNo: "",
      address: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Full Name is required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phNo: Yup.string().required("Phone Number is required"),
      password: Yup.string().required("Required"),
    }),
    validate: profileValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log('Form is submitting...'); 
      values = await Object.assign(values, {profile : file || ''})
      console.log(values);
    }
  });

  const onUpload = async (e) => {
    const selectedFile = e.target.files[0];
    console.log('Selected file:', selectedFile);

    if (!selectedFile) {
      console.error('No file selected');
      return;
    }

    try {
      const base64 = await convertToBase64(selectedFile);
      console.log('Base64 string:', base64);
      setFile(base64);
    } catch (error) {
      console.error('Error converting file to base64:', error);
    }
  };

const handleProfileImageClick = () => {
    fileInputRef.current.click();
  };





  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      {/* Left Side - Profile Info */}
      <div className="bg-[#7C2A2A] text-white flex flex-col justify-center items-center p-8">
        <h2 className="text-2xl font-bold mb-8">Your Profile</h2>
        <div className="flex flex-col items-center">
          <img src={img} alt="profileimg" className="w-24 h-24 rounded-full mb-4"/>
          <button className="text-sm underline mb-2">Edit Image ✏️</button>
          <p className="mb-8">abc@gmail.com</p>
        </div>
        <div className="w-full">
          <h3 className="text-lg font-semibold mb-4">Additional User Details</h3>
          <div className="name flex w-3/4 gap-10">
          <div className="mb-4">
            <p className="mb-1">Username ✏️</p>
            <input {...formik.getFieldProps('username')} type="text" className="w-full p-2 bg-[#C04A4A] rounded" placeholder="username" />
            <p className="mb-1">First name ✏️</p>
            <input {...formik.getFieldProps('firstname')} type="text" className="w-full p-2 bg-[#C04A4A] rounded" placeholder="firstname" />
            <p className="mb-1">Last name ✏️</p>
            <input {...formik.getFieldProps('lastname')} type="text" className="w-full p-2 bg-[#C04A4A] rounded" placeholder="lastname" />
         </div>
         
         
          <div className="mb-4">
            <p className="mb-1">Email ✏️</p>
            <input {...formik.getFieldProps('email')} type="text" className="w-full p-2 bg-[#C04A4A] rounded" placeholder="email" />
            <p className="mb-1">Phone No. ✏️</p>
            <input {...formik.getFieldProps('phno')} type="text" className="w-full p-2 bg-[#C04A4A] rounded" placeholder="phno" />
            <p className="mb-1">Address ✏️</p>
            <input {...formik.getFieldProps('address')} type="text" className="w-full p-2 bg-[#C04A4A] rounded" placeholder="address" />
          </div>
          </div>

          <button
                type="submit"
                  className="flex items-center h-8 bg-[#762626] no-underline rounded border pt-1 pb-1 pl-4 pr-4 justify-center gap-1 text-white"
                  style={{
                    color: "#303030",
                    border: "#303030",
                    width: "145px",
                    fontSize: "12px",
                    fontWeight: "550",
                  }}
                  
                >
                  Update
                </button>
          <button className="flex items-center space-x-1 mt-4">
            <span>Log out</span> 
            <span>↩️</span>
          </button>
        </div>
      </div>

      {/* Right Side - Menu Options */}
      <div className="flex flex-col justify-center items-start p-8">
        <div className="w-full max-w-sm space-y-4">
          <button className="flex justify-between items-center w-full bg-gray-200 p-4 rounded">
            <span>Settings</span>
            <span>➡️</span>
          </button>
          <button className="flex justify-between items-center w-full bg-gray-200 p-4 rounded">
            <span>Track your Concerns</span>
            <span>➡️</span>
          </button>
          <button className="flex justify-between items-center w-full bg-gray-200 p-4 rounded">
            <span>Rail Anubhav</span>
            <span>➡️</span>
          </button>
          <button className="flex justify-between items-center w-full bg-gray-200 p-4 rounded">
            <span>Suggestions</span>
            <span>➡️</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
