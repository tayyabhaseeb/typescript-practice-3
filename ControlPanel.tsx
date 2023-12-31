

// interface is class and has all the properties of class like extends 
// type is more constrained
 

const ControlPanel = ({ name, onChange }: {name: string ,  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void}) => {
  return (
    <form
      className="flex flex-row gap-4 text-white bg-primary-10"
      onSubmit={(event) => event.preventDefault()}
    >
      <div>
        <label className="font-bold">Your Name</label>
        <input
          name="name"
          className="w-full"
          type="text"
          value={name}
          onChange={onChange}
        />
      </div>
    </form>
  );
};



export default ControlPanel;