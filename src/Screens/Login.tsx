import React, { useState } from "react";
import { AiOutlineCloseCircle, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaUserShield } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";
import { MdOutlineCloudUpload } from "react-icons/md";

interface FormData {
  name: string;
  employeeId: string;
  password: string;
  gender: "male" | "female" | "other";
  designation: string;
  photo?: File | null; // new field
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
  title:string;
}

const Login: React.FC<Props> = ({ isOpen, onClose, onSubmit, title }) => {
  const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);

const [photoPreview, setPhotoPreview] = useState<string | null>(null);
const [isDragging, setIsDragging] = useState(false);


const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
  e.preventDefault();
  setIsDragging(false);
  const file = e.dataTransfer.files?.[0];
  if (file && file.type.startsWith("image/")) {
    setPhotoPreview(URL.createObjectURL(file));
  }
};

const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
  e.preventDefault();
  setIsDragging(true);
};

const handleDragLeave = () => {
  setIsDragging(false);
};


const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    setFormData(prev => ({ ...prev, photo: file }));
    setPhotoPreview(URL.createObjectURL(file));
  }
};

const handlePhotoRemove = () => {
  setFormData(prev => ({ ...prev, photo: null }));
  setPhotoPreview(null);
};

  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    employeeId: "",
    password: "",
    gender: "male",
    designation: "",
  });

  const handleChange = (key: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 font-librefranklin flex items-center justify-center px-4">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-transparent backdrop-blur-xs z-40"
      />

      {/* Modal Content */}
      <div className="relative z-50 w-full max-w-md p-6 rounded-3xl border border-white/50 bg-[#FFBF00]/20 backdrop-blur-3xl shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-200 pb-3 mb-5">
          <FaUserShield color="#05c107" size={25} />
         <div className="text-xl font-bold tracking-wide bg-gradient-to-r from-[#031746] to-[#0982fa] bg-clip-text text-transparent">
  {title}
</div>


          <div
            onClick={onClose}
            className="text-gray-500 hover:scale-110 hover:text-[#fc134c] cursor-pointer"
          >
            <GiCrossMark size={25} className="text-black hover:text-[#fc134c] cursor-pointer transition" />

          </div>
        </div>

        {/* Form */}
        <div className="space-y-5 text-gray-800">
<div className="grid grid-cols-1 gap-4">
 {[
  { label: "Name*", placeholder: "Full name", key: "name" },
  { label: "Employee ID*", placeholder: "Employee ID", key: "employeeId" },
  { label: "Password*", placeholder: "Password", key: "password" },
].map(({ label, placeholder, key }) => (
  <div key={key}>
    <label className="text-sm text-start font-semibold text-gray-700 block mb-1">
      {label}
    </label>
    <div className="w-full p-[2px] rounded-[5px] bg-blue-300 focus-within:bg-gradient-to-r focus-within:from-[#DFFF00] focus-within:to-[#6495ED] transition">
      <div className="relative">
        <input
          type={
            key === "password"
              ? showPassword
                ? "text"
                : "password"
              : key === "conpassword"
              ? showConfirmPassword
                ? "text"
                : "password"
              : "text"
          }
          value={(formData as any)[key]}
          onChange={(e) => handleChange(key as keyof FormData, e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-1.5 text-[14px] rounded-[4px] bg-white text-gray-800 placeholder-gray-400 focus:ring-0 outline-none transition pr-10"
        />
        {(key === "password") && (
          <div
            onClick={() =>
              key === "password"
                ? setShowPassword(!showPassword)
                : setShowConfirmPassword(!showConfirmPassword)
            }
            className="absolute cursor-pointer p-1 right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
          >
            {(key === "password" && showPassword) ? (
              <AiOutlineEye size={18} />
            ) : (
              <AiOutlineEyeInvisible size={18} />
            )}
          </div>
        )}
      </div>
    </div>
  </div>
))}

</div>


          {/* Submit */}
        <div
  onClick={handleSubmit}
  className="px-6 py-3 cursor-pointer rounded-xl text-white font-semibold shadow-[0_2px_2px_rgba(0,0,0,0.4)] border-none relative overflow-hidden"
  style={{
    backgroundImage: "linear-gradient(135deg, #6495ED, #40E0D0)",
  }}
>
  Login
</div>



        </div>
      </div>
    </div>
  );
};

export default Login;