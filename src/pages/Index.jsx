import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box maxWidth="800px" mx="auto" mt={8}>
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What is your return policy?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>We accept returns within 30 days of purchase. The item must be unused and in the same condition that you received it. It must also be in the original packaging. To initiate a return, please email us at returns@company.com with your order number and reason for return.</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How long does shipping take?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>Shipping times depend on your location. For US orders, standard shipping typically takes 3-5 business days. Expedited and overnight shipping options are available at checkout. International shipping times vary by country. Please allow up to 14 business days for international deliveries.</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Do you offer international shipping?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>Yes, we ship worldwide! Shipping costs and delivery estimates will be provided at checkout based on the items in your order and delivery location. Please note, you may be responsible for duties and taxes upon delivery.</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Index;
