import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
} from "@heroui/react";
import { EyeIcon } from "@heroicons/react/16/solid";
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/16/solid";

export const ModalVista = ({ row }) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("blur");

  const handleOpen = () => {
    onOpen(); 
  }

  console.log(row._valuesCache)

  return (
    <>
      <div className="flex gap-2">
        <Button
          name="Visualizar"
          backdrops="blur"
          className="capitalize p-2 bg-gray-200 hover:bg-gray-300 rounded-md"
          color="warning"
          variant="flat"
          onPress={() => handleOpen()}
        >
          <EyeIcon className="h-5 w-5 text-[#17232f]" />
        </Button>

        <Button
          name="Detalles"
          backdrops="blur"
          className="capitalize p-2 bg-gray-200 hover:bg-gray-300 rounded-md"
          color="warning"
          variant="flat"
          onPress={() => handleOpen()}
        >
          <DocumentMagnifyingGlassIcon className="h-5 w-5 text-[#ea6120]" />
        </Button>
      </div>

      <Modal 
        backdrop={backdrop} 
        isOpen={isOpen} 
        onClose={onClose}
        className="backdrop-blur-sm"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 bg-gradient-to-r from-[#17232f] to-[#1c2a38] text-white p-6 rounded-t-lg">
                <h2 className="text-2xl font-bold text-center">
                  Detalles del Proyecto
                </h2>
              </ModalHeader>
              <ModalBody className="bg-[#F8F9FA] text-[#17232f] p-8 space-y-6">
                <div className="flex gap-4">
                  <div className="border border-gray-200 rounded-lg p-4 w-1/2 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-sm text-gray-500 mb-1">Nombre del proyecto:</p>
                    <p className="font-medium">{row._valuesCache.nombre}</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 w-1/2 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-sm text-gray-500 mb-1">Estado:</p>
                    <p className="font-medium flex items-center">
                      {
                        (row._valuesCache.estado === 'Activo')
                        ? 
                        <>
                          <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                          {row._valuesCache.estado}
                        </>
                        :
                        <>
                          <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
                          {row._valuesCache.estado}
                        </>
                      }
                    </p>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 w-full bg-white shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-sm text-gray-500 mb-1">Nombre del colaborador:</p>
                  <p className="font-medium">{row._valuesCache.colaborador}</p>
                </div>
                <div className="flex gap-4">
                  <div className="border border-gray-200 rounded-lg p-4 w-1/2 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-sm text-gray-500 mb-1">Fecha de inicio:</p>
                    <p className="font-medium">{row._valuesCache.fechaInicio}</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 w-1/2 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-sm text-gray-500 mb-1">Fecha Final:</p>
                    <p className="font-medium">{row._valuesCache.fechaFinal}</p>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="bg-gradient-to-r from-[#17232f] to-[#1c2a38] p-6 rounded-b-lg">
                <button
                  className="bg-transparent border-2 border-[#ea6120] text-[#ea6120] px-6 py-2 rounded-lg font-medium hover:bg-[#ea6120] hover:text-white transition-all duration-300"
                  onClick={onClose}
                >
                  Cerrar
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}