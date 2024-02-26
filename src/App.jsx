import Memory from "./components/Memory"

export const App = () => {
  return (
    <div className="font-mono">
      <div className="bg-[#070B23] h-screen">
        <div className="flex justify-center">
          <h1 className="text-6xl py-10 text-white">Memory Reboot</h1>
        </div>
        <Memory />
      </div>
    </div>
  )
}

export default App
