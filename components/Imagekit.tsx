import React from "react";
import { IKContext, IKUpload } from "imagekitio-react";

const url = "https://ik.imagekit.io/4c98ru3n2/";
const publicKey = 'public_mdLf2yGXPl3+WntI0q9fl33WDag=';

interface AuthResponse {
  signature: string;
  expire: number;
  token: string;
}

const authenticator = async (): Promise<AuthResponse> => {
  try {
    const response = await fetch(`http://localhost:5000/file/auth`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const onError = (err: any) => console.log(err);

interface ImagekitProps {
  id: string;
  multiple?: boolean;
  onSuccess: (res: any) => void;
}

const Imagekit: React.FC<ImagekitProps> = ({ id, multiple, onSuccess }) => {
  return (
    <div className="hidden">
      <IKContext
        urlEndpoint={url}
        publicKey={publicKey}
        authenticator={authenticator}
      >
        <IKUpload
          onError={onError}
          onSuccess={onSuccess}
          id={id}
          multiple={multiple || false}
        />
      </IKContext>
    </div>
  );
};

export default Imagekit;
