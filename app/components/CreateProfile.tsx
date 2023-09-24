import {
  useCreateProfile,
  DuplicatedHandleError,
} from "@lens-protocol/react-web";

export default function CreateProfile() {
  const { execute, isPending } = useCreateProfile();

  const onClick = async () => {
    const handle = window.prompt("Enter your handle");

    const result = await execute({ handle });

    if (result.isSuccess()) {
      console.log("Profile created!");
      return;
    }

    switch (result.error.constructor) {
      case DuplicatedHandleError:
        console.log("Handle already taken");

      default:
        console.log(`Could not create profile due to: ${result.error.message}`);
    }
  };

  return (
    <div>
      <button
        disabled={isPending}
        onClick={onClick}
        className="text-white hover:text-gray-200 text-xs"
      >
        CREATE PROFILE
      </button>
    </div>
  );
}
