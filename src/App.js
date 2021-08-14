import {ChatEngine} from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";

function App() {
  return (
    <ChatEngine height="100vh" projectID="
    a1bb37b1-0837-4877-8122-8a1519ff1909" userName="Ann" userSecret="12341234"
    renderChatFeed={(chatAppProps) => <ChatFeed  {...chatAppProps}/>}
    />
  );
}

export default App;
