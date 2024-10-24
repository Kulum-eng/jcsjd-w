import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Estilos de Quill (tema 'snow')
import { motion, AnimatePresence } from 'framer-motion';
import { FaRegImage } from "react-icons/fa6";

interface EditorProps {
  initialValue?: string;
}

const Editor: React.FC<EditorProps> = ({ initialValue = '' }) => {
  const [value, setValue] = useState<string>(initialValue);
  const [isFocused, setIsFocused] = useState<boolean>(false); // Controlar la visibilidad del editor

  // Función para manejar cambios en el editor
  const handleChange = (content: string) => {
    setValue(content);
  };

  // Función para mostrar el editor cuando el input es enfocado o se hace clic
  const handleFocus = () => {
    setIsFocused(true);
  };

  // Función para cerrar el editor y regresar al input
  const closeEditor = () => {
    setIsFocused(false);
  };

  // Limpiar el valor del input eliminando etiquetas HTML no deseadas
  const cleanValueForInput = (value: string) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = value;
    const textValue = tempDiv.textContent || tempDiv.innerText || "";
    return textValue.trim();
  };

  return (
    <div className="z-30 relative bottom-6">
      {/* Input que al hacer clic o enfocarse muestra el editor */}
      <motion.div
        initial={{ height: 'auto' }}
        animate={{ height: isFocused ? 'auto' : 'auto' }}
        className="overflow-hidden bg-white  w-full"
      >
        {!isFocused && (
          <div className='flex flex-row gap-4 items-center relative py-2'>
            <input
              type="text"
              placeholder="Que deseas postear Angel Tagua...."
              onFocus={handleFocus}
              value={cleanValueForInput(value)} // Limpiar el valor actual para el input
              onChange={(e) => setValue(e.target.value)}
              className="w-full p-3 relative  border bg-transparent border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaRegImage color='#2BD071' size={30} />
          </div>
        )}

        {/* Editor Quill que aparece al enfocar el input */}
        <AnimatePresence>
          {isFocused && (
            <motion.div
              key="editor"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '300px' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 relative w-full"
            >
              <ReactQuill
                theme="snow"
                value={value}
                onChange={handleChange}
                className="h-64"
              />
              {/* Botón para cerrar el editor */}
              <motion.button
                onClick={closeEditor}
                className=" absolute bottom-0 right-0 mt-2 px-4 py-2 bg-red-500 text-white rounded-md z-20 hover:bg-red-600 transition-all"
              >
                Cerrar Editor
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Editor;
