import { Calendar, GraduationCapIcon, HomeIcon, ListTodo, SettingsIcon } from "lucide-react";
import { AccordionContent, Accordion, AccordionItem, AccordionTrigger } from "../ui/accordion";
import SettingSidebar from "@src/pages/Setting/components/SettingSidebar/SettingSidebar";
import routes from "@src/configs/router";
import { Link } from "react-router-dom";

const Sicebar = ({ isShowSideBar }: { isShowSideBar: boolean }) => {
    const topContents = [
        {
            id: 1,
            icon: <HomeIcon />,
            title: "Home",
            path: routes.HOME,
        },

        {
            id: 2,
            icon: <Calendar />,
            title: "Calendar",
            path: routes.HOME,
        },
    ];

    return (
        <div
            className={`h-[calc(100vh_-60px)] absolute md:relative bg-white z-10 ${
                isShowSideBar ? "w-[300px]" : "w-[0px] md:w-[86px]"
            }  border-r border-t border-border overflow-hidden transition-all duration-300`}
        >
            <div className="border-b border-border py-3">
                {topContents.map((item) => {
                    return (
                        <Link key={item.id} to={item.path}>
                            <div
                                key={item.id}
                                className="flex items-center gap-2 text-base font-semibold px-6 py-3 group cursor-pointer hover:bg-muted max-w-[300px] truncate mr-3 rounded-e-full"
                            >
                                {item.icon}
                                <span className={`group-hover:underline ${!isShowSideBar && "hidden"}`}>
                                    {item.title}
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>
            <div className="border-b border-border py-3">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="border-transparent">
                        <AccordionTrigger className="text-base font-semibold px-6 py-3 group cursor-pointer hover:bg-muted max-w-[300px] truncate mr-3 rounded-e-full border-transparent">
                            <div className="flex items-center gap-2">
                                <GraduationCapIcon />
                                <span className={`${!isShowSideBar && "hidden"}`}>Enrolled</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="flex items-center gap-2 text-base font-semibold px-6 py-3 group cursor-pointer hover:bg-muted max-w-[300px] truncate mr-3 rounded-e-full">
                                <ListTodo />
                                <span className={`${!isShowSideBar && "hidden"}`}>To dos</span>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="py-3">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="border-transparent">
                        <AccordionTrigger className="text-base font-semibold px-6 py-3 group cursor-pointer hover:bg-muted max-w-[300px] truncate mr-3 rounded-e-full border-transparent">
                            <div className="flex items-center gap-2">
                                <SettingsIcon />
                                <span className={`${!isShowSideBar && "hidden"}`}>Settings</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <SettingSidebar isShowSideBar={isShowSideBar} />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default Sicebar;
