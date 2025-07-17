import React from "react";

interface FormData {
  name: string;
  employeeId: string;
  password: string;
  gender: "male" | "female" | "other";
  designation: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
}

const RegistrationDrawer: React.FC<Props> = ({ isOpen, onClose, onSubmit }) => {
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

  const submit = () => {
    onSubmit(formData);
    onClose();
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 transition-transform duration-500 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-5 border-b border-gray-200 bg-white z-10 shadow-sm">
        <h2 className="text-2xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
          EMPLOYEE REGISTRATION
        </h2>
        <div
          onClick={onClose}
          className="text-xl text-gray-400 hover:text-red-500 cursor-pointer transition"
        >
          ✕
        </div>
      </div>

      {/* Form */}
      <div className="p-6 space-y-6">
        {[
          { label: "Name", key: "name" },
          { label: "Employee ID", key: "employeeId" },
          { label: "Password", key: "password" },
          { label: "Designation", key: "designation" },
        ].map(({ label, key }) => (
          <div key={key} className="group">
            <div className="text-xs font-medium text-gray-500 mb-1 uppercase tracking-widest">
              {label}
            </div>
            <div className="relative bg-white border border-gray-300 rounded-2xl overflow-hidden shadow-lg transition-all focus-within:ring-2 focus-within:ring-green-400">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/40 to-green-100/40 opacity-0 group-focus-within:opacity-100 transition-all pointer-events-none"></div>
              <input
                type={key === "password" ? "password" : "text"}
                value={(formData as any)[key]}
                onChange={e => handleChange(key as keyof FormData, e.target.value)}
                className="w-full px-4 py-3 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400 tracking-wide"
                placeholder={`Enter ${label}`}
              />
            </div>
          </div>
        ))}

        {/* Gender */}
        <div className="group">
          <div className="text-xs font-medium text-gray-500 mb-1 uppercase tracking-widest">
            Gender
          </div>
          <div className="flex gap-4 mt-1">
            {["male", "female", "other"].map(g => (
              <div
                key={g}
                onClick={() => handleChange("gender", g)}
                className={`px-5 py-2 rounded-full border text-xs font-bold uppercase cursor-pointer transition-all shadow-sm tracking-widest
                  ${
                    formData.gender === g
                      ? "bg-gradient-to-r from-blue-500 to-green-400 text-white shadow-md"
                      : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
                  }`}
              >
                {g}
              </div>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div
          onClick={submit}
          className="text-center mt-8 py-3 rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 text-white font-extrabold tracking-widest shadow-xl hover:shadow-2xl cursor-pointer transition-all"
        >
          SUBMIT
        </div>
      </div>
    </div>
  );
};

export default RegistrationDrawer;
