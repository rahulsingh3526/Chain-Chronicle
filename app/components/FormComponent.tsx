// FormComponent.tsx
import React, { useState } from "react";

interface FormComponentProps {
  name: string;
}

const FormComponent: React.FC<FormComponentProps> = ({ name }) => {
  const [showForm, setShowForm] = useState<boolean>(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    // Close the form after submission (you can modify this behavior as needed)
    setShowForm(false);
  };

  return (
    <div>
      <div className="relative group cursor-pointer">
        <button
          onClick={handleButtonClick}
          className="text-white hover:text-gray-200 text-xs"
        >
          {name}
        </button>
      </div>
      {showForm && (
        <>
          <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md backdrop-filter backdrop-brightness-50">
            {/* Background overlay */}
          </div>

          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg relative">
              <button
                onClick={handleCloseForm}
                className="absolute top-0 right-0 m-3 text-gray-600 hover:text-red-600"
              >
                Close
              </button>
              <form onSubmit={handleSubmit}>
                {/* Form content here */}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Create Post
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="border rounded w-full py-2 px-3"
                  />
                </div>
                {/* Other form fields */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FormComponent;
