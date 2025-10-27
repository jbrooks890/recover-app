import { Form } from "@crymson-core/forms";
import { CheckIcon, PhoneIcon, ProfileIcon } from "@crymson-core/web/svg";

type Props = {};
export default function Profile({}: Props) {
  return (
    <Form
      source={{
        name: "John Doe",
        age: 25,
        gender: "male",
        email: "johndoe@gmail.com",
        phone: "(123)456-7890",
      }}
      handleSubmit={() => {
        return true;
      }}
      className="border-4 rounded-lg p-8 text-lg/normal border-cyan-500 flex flex-col content-start gap-4"
    >
      <div className="flex flex-col gap-[inherit]">
        <h2 className="flex gap-x-4">
          <ProfileIcon className="h-[1em]" />
          <span>Your Info</span>
        </h2>
        <Form.Field name="name" />
        <Form.Field name="age" type="number" min={0} inline />
        <Form.Field
          name="gender"
          type="select"
          choices={"Male/Female/Non-Binary".split("/")}
          className="whitespace-nowrap"
          inline
        />
        <h2 className="flex gap-x-4">
          <PhoneIcon className="h-[1em]" />
          <span>Contact</span>
        </h2>
        <Form.Field name="phone" />
        <Form.Field name="email" />
      </div>
      <Form.Submit className="mt-auto grid justify-center grid-flow-col text-2xl font-key uppercase tracking-widest leading-none items-center gap-2 bg-cyan-600 py-3 rounded hover:bg-green-500 *:drop-shadow-sm">
        <span>Submit</span>
        <CheckIcon className="h-[.75em] relative bottom-[0.1em]" />
      </Form.Submit>
    </Form>
  );
}
