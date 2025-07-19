import React, { useState } from "react";
import { AiOutlineCloseCircle, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineCloudUpload } from "react-icons/md";
import { postData } from "../BackendConnections/FetchBackendServices";
import CogniCodeLogo from "../assets/MainAssets/CogniCodeLogo.svg"
import { IoMdCloseCircle } from "react-icons/io";

interface FormData {
  name: string;
  employeeId: string;
  password: string;
  gender: "male" | "female" | "other";
  designation: string;
  companyMail: string;
  photo?: File | null;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
  title: string;
}

const RegistrationModal: React.FC<Props> = ({ isOpen, onClose, onSubmit, title }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmPassword, setConfirmPassword] = useState("");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    employeeId: "",
    password: "",
    gender: "male",
    designation: "",
    companyMail: "", // Added companyMail
    photo: null,
  });

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setFormData(prev => ({ ...prev, photo: file }));
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

  const handleChange = (key: keyof FormData | 'confirmPassword', value: string) => {
    if (key === 'confirmPassword') {
      setConfirmPassword(value);
    } else {
      setFormData(prev => ({ ...prev, [key]: value }));
    }
  };

  const handleSubmit = async () => {
    // Validate passwords match
    if (formData.password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Validate required fields
    if (!formData.name || !formData.employeeId || !formData.password || !formData.designation || !formData.companyMail) {
      setError("Please fill in all required fields");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.companyMail)) {
      setError("Please enter a valid company email");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {

      const submitData = new FormData();
      submitData.append('employeeName', formData.name);
      submitData.append('employmentID', formData.employeeId);
      submitData.append('password', formData.password);
      submitData.append('gender', formData.gender);
      submitData.append('employeeDesignation', formData.designation);
      submitData.append('employeeMail', formData.companyMail);
      if (formData.photo) {
        submitData.append('employeePic', formData.photo);
      }

      // Send to backend
      const response = await postData('employees/submit_employee', submitData);
      
      if (response) {
        onSubmit(formData);
        onClose();
      } else {
        setError("Failed to register. Please try again.");
      }
    } catch (err) {
      setError("An error occurred while submitting the form");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 font-librefranklin flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-transparent backdrop-blur-xs z-40" />

      <div className="relative z-50 w-full max-w-xl p-6 rounded-3xl border border-white/50 bg-[#c6e8fb]/30 backdrop-blur-3xl shadow-2xl">
        <div className="flex justify-between items-center border-b border-gray-200 pb-3 mb-5">
          <img src={CogniCodeLogo} draggable={false} className="h-15 w-15 mr-2" />
          <div className="text-xl font-bold tracking-wide bg-gradient-to-r from-[#031746] to-[#0982fa] bg-clip-text text-transparent">
            {title}
          </div>
          <div
            onClick={onClose}
            className="text-gray-500 hover:scale-110 hover:text-[#fc134c] cursor-pointer"
          >
            <IoMdCloseCircle  size={25} className="text-black hover:text-[#fc134c] cursor-pointer transition" />
          </div>
        </div>

        <div className="space-y-5 text-gray-800">
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Name*", placeholder: "Full name", key: "name" },
              { label: "Designation*", placeholder: "Designation", key: "designation" },
              { label: "Employee ID*", placeholder: "Employee ID", key: "employeeId" },
              { label: "Company's mail*", placeholder: "Company's mail", key: "companyMail" },
              { label: "Password*", placeholder: "Password", key: "password" },
              { label: "Confirm Password*", placeholder: "Confirm Password", key: "confirmPassword" },
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
                          : key === "companyMail"
                          ? "email"
                          : "text"
                      }
                      value={key === "confirmPassword" ? confirmPassword : (formData as any)[key]}
                      onChange={(e) => handleChange(key as keyof FormData | 'confirmPassword', e.target.value)}
                      placeholder={placeholder}
                      className="w-full px-4 py-1.5 text-[14px] rounded-[4px] bg-white text-gray-800 placeholder-gray-400 focus:ring-0 outline-none transition pr-10"
                      disabled={isLoading}
                    />
                    {(key === "password") && (
                      <div
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute cursor-pointer p-1 right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
                      >
                        {showPassword ? (
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

          <div className="w-full justify-between gap-x-4 flex">
            <div className="w-[50%]">
              <label className="text-sm text-start font-semibold text-gray-700 block mb-1">
                Gender*
              </label>
              <div className="w-full p-[2px] rounded-[5px] bg-blue-300 focus-within:bg-gradient-to-r focus-within:from-[#DFFF00] focus-within:to-[#6495ED] transition">
                <select
                  value={formData.gender}
                  onChange={e => handleChange("gender", e.target.value)}
                  className="w-full px-4 py-1.5 text-[14px] rounded-[4px] bg-white text-gray-800 placeholder-gray-400 focus:ring-0 outline-none transition"
                  disabled={isLoading}
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="w-[50%] flex flex-col items-start">
              <label className="text-sm text-start font-semibold text-gray-700 block mb-1">
                Upload Photo*
              </label>
              <div className="w-28 h-28 relative">
                <input
                  id="photoInput"
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                  disabled={isLoading}
                />
                <label
                  htmlFor="photoInput"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  className={`block w-full h-full bg-white rounded-[10px] overflow-hidden border-2 cursor-pointer relative transition
                    ${isDragging ? "border-dashed border-green-500 bg-green-50" : "border-blue-400"}
                    ${isLoading ? "opacity-50 cursor-not-allowed" : ""}
                  `}
                >
                  {photoPreview ? (
                    <img
                      src={photoPreview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full text-[12px] flex-col h-full flex items-center justify-center text-gray-600">
                      <MdOutlineCloudUpload size={25} />
                      <div>Drag or Upload</div>
                    </div>
                  )}
                </label>
                {photoPreview && (
                  <div
                    onClick={handlePhotoRemove}
                    className="absolute top-[-6px] right-[-6px] bg-white rounded-full p-[2px] text-black cursor-pointer shadow-md"
                  >
                    <AiOutlineCloseCircle size={18} />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div
            onClick={handleSubmit}
            className={`px-6 py-3 cursor-pointer rounded-xl  bg-gradient-to-r from-[#FFD700] to-[#1E90FF] text-white font-semibold shadow-[0_2px_2px_rgba(0,0,0,0.4)] border-none relative overflow-hidden
              ${isLoading ? "opacity-50 cursor-not-allowed" : ""}
            `}
          >

            {!isLoading ?
            
            <div className="items-center justify-center space-x-4 flex">
              <div>Registering...</div>
              <span className="loader"></span>
            </div>: "Register"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;