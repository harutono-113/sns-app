import { supabase } from "../lib/supabase";

function formatUser(user) {
  return {
    ...user,
    userName: user.user_metadata.name,
  };
}

export const authRepository = {
  async signup(name, email, password) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    });

    if (error != null) throw new Error(error.message);

    return formatUser(data.user);
  },

  async signin(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw new Error(error.message);

    return formatUser(data.user);
  },

  async getCurrentUser() {
    const { data, error } = await supabase.auth.getSession();

    if (error != null) throw new Error(error.message);
    if (data.session == null) return;

    return formatUser(data.session.user);
  },

  async signout() {
    const { error } = await supabase.auth.signOut();

    if (error != null) throw new Error(error.message);

    return true;
  },
};
