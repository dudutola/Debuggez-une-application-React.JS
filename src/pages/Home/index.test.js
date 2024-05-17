import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });
});


describe("When a page is created", () => {
  afterEach(cleanup);
  it("a list of events is displayed", async () => {
    render(<Home />);
    const eventsList = await screen.findByTestId("card-testid");
    expect(eventsList).toBeInTheDocument();
    expect(eventsList).toHaveTextContent("mai");
  })
  it("a list a people is displayed", () => {
    render(<Home />);
    const listOfPeopleImages = screen.queryAllByTestId("card-image-testid");
    expect(listOfPeopleImages.length).toBeGreaterThan(0);
    listOfPeopleImages.forEach(image => {
      expect(image).toBeInTheDocument();
    });
  })
  it("a footer is displayed", () => {
    render(<Home />);
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveTextContent("prestation");
    expect(footer).toHaveTextContent("Paris");
  })
  it("an event card, with the last event, is displayed", async () => {
    render(<Home />);
    const lastEventCard = await screen.findByTestId("card-testid");
    expect(lastEventCard).toBeInTheDocument();
  })
});
