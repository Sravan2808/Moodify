import { AppRoutes } from "./AppRoutes";
import "./features/shared/style/global.scss";
import FaceExpression from "./features/Expression/components/FaceExpression";
import { AuthProvider } from "./features/auth/auth.context";

function App() {
  return (
    <AuthProvider>
      <AppRoutes></AppRoutes>
    </AuthProvider>
  );
}

export default App;
