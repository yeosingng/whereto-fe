import styled from 'styled-components'
import { Layout, Button } from '../components/'
import { Carousel } from 'react-responsive-carousel'
import { GroupIcon, LocationPinIcon, MessageIcon, BalletIcon } from '../images'

type ImageData = {
  image: Function,
  text: String,
}

let imageAndText: Array<ImageData>
imageAndText = [
  {
    image: GroupIcon,
    text: 'Create a room'
  },
  {
    image: MessageIcon,
    text: 'Invite your friends'
  },
  {
    image: LocationPinIcon,
    text: 'Suggest Locations'
  },
  {
    image: BalletIcon,
    text: 'Vote!'
  },
]

const ImageCarousel = () => {
  return (
    <CarouselContainer>
      <Carousel
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        showIndicators={true}
        autoPlay={true}
        infiniteLoop={true}
      >
        {imageAndText.map(({ image, text }, i) => {
          return (
            <CarouselContent key={i}>
              {image()}

              <CarouselText>
                {text}
              </CarouselText>
            </CarouselContent>
          )
        })}
      </Carousel>
    </CarouselContainer>
  )
}

export default function Home() {
  return (
    <Layout header>
      <Container>
        <ImageCarousel />

        <ButtonContainer style={{ marginTop: 40 }}>
          <Button>
            Create
          </Button>

          <Button style={{ marginLeft: 40, width: 110 }}>
            Join
          </Button>
        </ButtonContainer>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: auto;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const CarouselContainer = styled.div`
  max-width: 600px;
  margin-top: 20px;
  padding-inline-start: 0;
  @media screen and (max-width: 768px) {
    max-width: 300px;
  }
`

const CarouselContent = styled.div`
  background-color: white;
  margin: auto;
  padding: 10px 50px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  height: 400px;
`

const CarouselText = styled.div`
  padding: 40px 0px;
  font-size: 24px;
  font-weight: 500;
`
