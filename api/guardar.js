export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbz7HqojjTuqdLho3Hu68SEAt2IZ8Ljj3G_toSAk_x4qRfNAoOMKc0lHnpfApSljg_kV/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });

    const result = await response.json();

    return res.status(200).json({ status: 'success', message: result });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
}
