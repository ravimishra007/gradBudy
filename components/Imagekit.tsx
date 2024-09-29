import React from "react";
import { IKContext, IKUpload } from "imagekitio-react";

const url = process.env.IMGKIT_PUBLIC_URL as string;
const publicKey = process.env.IMGKIT_PUBLIC_KEY as string;
const API = process.env.API_URL as string;

interface AuthResponse {
  signature: string;
  expire: number;
  token: string;
}

const authenticator = async (): Promise<AuthResponse> => {
  try {
    const response = await fetch(`${API}file/auth`);

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
