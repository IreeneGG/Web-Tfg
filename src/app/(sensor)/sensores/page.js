
import CardPlant from "@/components/component/cardPlant";
import { Section, Title } from "@/components/ui/section";

export default function SensoresDetalle() {
  return (
    <div key="1" className="bg-white p-2">
      <div className="flex justify-center max-w-full items-center w-full rounded-lg flex-col mt-4 bg-[#F2F2F2] dark:bg-[#868080] ">
        <Section title="Tiempo">
          <div className="grid  lg:max-w-6xl lg:w-full lg:mb-0 lg:grid-cols-auto lg:text-left w-full h-full" >
          <CardPlant item={"planta1"}/>
          </div>
        </Section>
      </div>
    </div>
  );
}


