
const Card = ({ item }) => {
    return (
        <div class="m-7 dark:bg-[#3f4d1f] bg-gray-900 max-w-[250px] min-w-[150px]  rounded-xl hover:bg-[#212b3f] dark:hover:bg-[#34758a] hover:scale-110 duration-700 p-5">
            <h4 class="py-2 text-white font-bold">{item}</h4>
            <p class="text-base leading-7 text-white font-semibold space-y-4">HUMEDAD</p>
            <p class="text-sm leading-7 text-slate-300 space-y-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro est numquam ipsa consequatur provident fugiat quaerat cupiditate temporibus cum?</p>
            {/*<div class="pt-5 pb-2 flex justify-center">
                <button class="w-36 h-10 font-semibold rounded-md bg-indigo-100 hover:scale-90 duration-500">Button</button>
            </div>*/}
        </div>


    )
};

const CardContainer = ({ children, ...props }) => {
    return (
      <div className="flex flex-row flex-wrap gap-5 p-3 justify-self" {...props}>
        {children}
      </div>
    );
  }
export { Card, CardContainer };