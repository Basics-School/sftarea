import { SelectNeighbours } from "@/components/layouts/selec-neigbour";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { MicIcon, Search, SearchIcon, Settings, Settings2 } from "lucide-react";
export default function Home() {
    return (
        <main className="relative">
            <section className="flex w-full flex-col h-[35vh] bg-[url('/hero.png')] bg-cover  " >
                <div className="flex-col justify-center bg-gradient-to-b flex from-black via-transparent  to-transparent h-full">
                    <div className="max-w-screen-xl w-full mx-auto   ">
                        <div className=" space-y-4 text-background max-w-screen-sm   w-full p-4  md:px-10 ">
                            <h1 className="md:text-5xl text-3xl font-bold">
                                Looking For A Home?
                            </h1>
                            <p className="font-semibold">
                                Find a variety of properties that suit you very easily, forget all difficulties in finding a residence for you
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="  bg-white max-w-screen-xl rounded-2xl flex flex-col shadow-md overflow-hidden mx-auto relative -top-16  min-h-40 ">
                <ul className="lg:flex w-full  font-bold hidden ">
                    <button className="bg-white w-full py-3 text-xl focus:text-white  focus:bg-purple-600">Buy</button>
                    <button className="bg-white w-full py-3 text-xl focus:text-white focus:bg-purple-600">Rent</button>
                    <button className="bg-white w-full py-3 text-xl focus:text-white focus:bg-purple-600">Commercial</button>
                    <button className="bg-white w-full py-3 text-xl focus:text-white focus:bg-purple-600">Plots / Land</button>
                    <button className="bg-white w-full py-3 text-xl focus:text-white focus:bg-purple-600">New Launch</button>
                    <button className="bg-white w-full py-3 text-xl focus:text-white focus:bg-purple-600">New Projects</button>
                    <button className="bg-white w-full py-3 text-xl focus:text-white focus:bg-purple-600">PG / CO-Living</button>
                </ul>
                <form className="flex-1 gap-6 flex flex-col lg:flex-row items-center  p-6">
                    <div className="flex gap-6 w-full">
                        <Select>
                            <SelectTrigger className="md:w-[240px] w-1/2 flex-1 ">
                                <SelectValue placeholder="Property Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Property Type</SelectLabel>
                                    <SelectItem value="apartments">Apartments</SelectItem>
                                    <SelectItem value="bungalow">Bungalow</SelectItem>
                                    <SelectItem value="homestay">HomeStay</SelectItem>
                                    <SelectItem value="office">Office</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <SelectNeighbours />
                    </div>
                    <div className="flex px-2 border rounded-md items-center w-full">
                        <SearchIcon />
                        <Input placeholder="Search &quot;Farm house in punjab below 1 cr&quot;" className="outline-none focus-visible:ring-0  w-80  focus-visible:ring-ring border-none focus-within:outline-none ring-0" />
                    </div>
                    <div className="flex gap-6 w-full">
                        <button className=" bg-purple-600/10 text-purple-600 p-2 rounded-md hover:text-white hover:bg-purple-600">
                            <MicIcon className="" />
                        </button>
                        <button className=" bg-purple-600/10 text-purple-600 p-2 rounded-md hover:text-white hover:bg-purple-600">
                            <Settings2 className="" />
                        </button>
                        <button className=" bg-purple-600 text-nowrap  p-2 rounded-md font-bold flex gap-4 flex-1 justify-around text-white hover:bg-purple-600">
                            <span>Search Now</span>
                            <Search />
                        </button>
                    </div>
                </form>
            </div>
        </main >
    );
}
