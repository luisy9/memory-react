import Memory from "./components/Memory"

export const App = () => {
  return (
    <div className="w-screen h-screen">
      <div className="flex justify-center">
        <h1 className="text-6xl">Memory Reboot</h1>
      </div>
      <Memory />
    </div>
  )
}

export default App
