/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import DrawingArrow from 'assets/drawing-arrow.svg';

import ProfitThumb from 'assets/images/sleep.png';

const data = {
  title:
    'Keep track of habits',
  description:
    'Start building daily habits and keep track of them here. See your current streak, best, average, and number of resets to keep you on track',
  // btnName: 'Get in touch',
  // btnURL: '/',
  // points: [
  //   {
  //     icon: <IoIosCheckmarkCircle color="#A1887F" />,
  //     text: '3D modelling services',
  //   },
  //   {
  //     icon: <IoIosCheckmarkCircle color="#A1887F" />,
  //     text: 'Variety of filament materials and colors',
  //   },
  //   {
  //     icon: <IoIosCheckmarkCircle color="#A1887F" />,
  //     text: 'On demand printing',
  //   },
  // ],
};

export default function FeatureOne() {
  return (
    <section sx={{ variant: 'section.featureOne' }} id="features">
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={ProfitThumb} alt="Thumbnail" width="700" height="565" />
        </Box>
        <Box sx={styles.contentBox}>
          <TextFeature
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
            points={data.points}
          />
        </Box>
      </Container>
      <Box sx={styles.bottomArrow}>
        <Image src={DrawingArrow} alt="Arrow" />
      </Box>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: ['flex-Start', null, null, 'space-between'],
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, null, null, null, null, null, null, 8],
  },
  thumbnail: {
    pr: [2, null, 7, 4, 7, 8, null, 10],
    pl: [0, null, 7, 0],
    display: 'flex',
    order: [2, null, null, 0],
    mx: ['auto', 0],
    img: {
      ml: [0, null, null, -3],
      height: 'auto',
    },
  },
  contentBox: {
    flexShrink: 0,
    textAlign: ['center', null, null, 'left'],
    width: ['100%', null, null, 350, 400, '470px'],
    pb: [7, null, null, 0],
    '.btn__link': {
      mt: [4, null, 5],
    },
  },
  bottomArrow: {
    zIndex: '10',
    position: 'absolute',
    bottom: -185,
    left: '33%',
    display: ['none', null, null, null, null, null, null, 'block'],
  },
};
