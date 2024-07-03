import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

export default function Faq() {
  return (
    <>
      <section class="">
        <button className="text-[#020043]  border border-[#4D4C7B] px-4 py-1 rounded-3xl " >
            Faq
        </button>
      <h1 class="text-xl md:text-2xl font-semibold my-4 md:my-6 text-[#020043] lg:text-3xl ">
            Frequently Asked Questions
          </h1>
        <div class="container px-2  mx-auto">
          
          <Accordion allowToggle>
            <AccordionItem  >
              <h2>
                <AccordionButton className="bg-[#FFFFF5]" >
                  <Box as="span" flex="1" textAlign="left" className="text-red-[#020043] font-medium " >
                  What are your office hours?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="text-xs text-[#343268]" >
              Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton className="bg-[#FFFFF5]"  >
                  <Box as="span" flex="1" textAlign="left"  className="text-red-[#020043] font-medium" >
                  How can I schedule an appointment?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="text-xs text-[#343268]" >
              You can schedule an appointment by logging into your account on Doc Plus and selecting the Schedule Appointmen option. Follow the prompts to choose a date and time.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton className="bg-[#FFFFF5]"  >
                  <Box as="span" flex="1" textAlign="left"  className="text-red-[#020043] font-medium" >
                  Do you accept insurance?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="text-xs text-[#343268]" >
              Yes, we accept most major insurance plans. Please check with your insurance provider for specific coverage details.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton className="bg-[#FFFFF5]"  >
                  <Box as="span" flex="1" textAlign="left"  className="text-red-[#020043] font-medium" >
                  What should I bring to my appointment?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="text-xs text-[#343268]" >
              Bring your ID, insurance card, and any relevant medical records or medications.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton className="bg-[#FFFFF5]"  >
                  <Box as="span" flex="1" textAlign="left"  className="text-red-[#020043] font-medium" >
                  Do you offer telemedicine appointments?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="text-xs text-[#343268]" >
              Yes, we offer telemedicine appointments. You can schedule one through our platform.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
