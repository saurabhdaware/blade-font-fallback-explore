import {
  Display,
  Box,
  Button,
  ArrowRightIcon,
  Text,
} from '@razorpay/blade/components';

function App(): React.ReactElement {
  return (
    <Box padding="spacing.3">
      <Box maxWidth="430px">
        <Display size="small">
          Collect payments with custom{' '}
          <Display size="small" as="span" color="surface.text.primary.normal">
            Payment Pages
          </Display>
        </Display>
        <Text marginY="spacing.7">
          Razorpay Payment Pages is the easiest way to accept payments with a
          custom-branded online store. Accept international and domestic
          payments with automated payment receipts. Take your store online
          instantly with zero coding.
        </Text>
      </Box>
      <Button
        onClick={() => console.log('hi')}
        icon={ArrowRightIcon}
        iconPosition="right"
      >
        Sign Up Now
      </Button>
      <Button marginLeft="spacing.3" variant="secondary" href="#">
        View Documentation
      </Button>
    </Box>
  );
}

export default App;
