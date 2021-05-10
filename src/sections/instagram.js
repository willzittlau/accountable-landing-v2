/** @jsx jsx */
import { jsx, Container} from "theme-ui";

export default function InstagramFeed() {
  return (
    <section sx={{ variant: "section.instaFeed" }}>
      <Container>
      <iframe style={{width: 'inherit', border: 'none'}} src="//lightwidget.com/widgets/16c1de5e16335f5b8ab20a80158c6760.html" scrolling="no" allowtransparency="true" class="lightwidget-widget"></iframe>
      </Container>
    </section>
  );
}

const styles = {
  iframe: {
    width: 'inherit !important',
    border: 'none'
  }}