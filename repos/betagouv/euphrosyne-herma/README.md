# Euphrosyne Herma - Data Upload Tool

A Python desktop application for uploading data to the Euphrosyne research platform. This GUI application provides an intuitive interface for managing data uploads with secure authentication and Azure cloud integration.

## Features

- **Graphical Interface**: User-friendly Qt-based desktop application
- **Secure Authentication**: Integrated login system with token management
- **Azure Integration**: Uses AzCopy for efficient cloud data transfer
- **Project Management**: Browse and select projects and runs
- **Real-time Output**: Live display of upload progress and logs
- **Configuration Management**: Flexible YAML-based configuration

## Requirements

- Python 3.8+
- PySide6 (Qt for Python)
- httpx for HTTP requests
- PyYAML for configuration
- AzCopy (automatically initialized)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd data-upload
```

2. Install dependencies:

```bash
pip install -r requirements/base.txt
```

3. For development:

```bash
pip install -r requirements/dev.txt
```

## Usage

### Starting the Application

Launch the Euphrosyne Herma application:

```bash
python data_upload/gui.py
```

Or using the module:

```bash
python -m data_upload.gui
```

### First Run

1. The application will automatically initialize AzCopy
2. If authentication is required, a login dialog will appear
3. Enter your Euphrosyne credentials
4. The main data upload interface will open

### Using the Interface

The application provides widgets for:

- **Login Management**: Secure authentication with the Euphrosyne platform
- **Data Location**: Browse and select data files/folders
- **Data Type Selection**: Choose the type of data to upload
- **Upload Progress**: Monitor upload status and logs

## Configuration

The application uses a `config.yml` file for configuration:

```yaml
euphrosyne:
  url: "http://localhost:8000"

euphrosyne-tools:
  url: "http://localhost:8001"
```

Settings are automatically saved using Qt's QSettings system under the "Euphrosyne" organization and "Herma" application name.

## Development

### Code Style

The project follows these standards:

- Black for code formatting
- isort for import sorting
- Maximum line length: 120 characters (configured in setup.cfg)

### Development Commands

```bash
# Format code
make format

# Check code style
make style

# Build standalone executable
make nuitka
```

### Dependencies

**Runtime Dependencies:**

- `httpx==0.28.1` - HTTP client
- `PySide6==6.9.1` - Qt bindings for Python
- `PyYAML==6.0.2` - YAML configuration parsing

**Development Dependencies:**

- `black==25.1.0` - Code formatting
- `isort==6.0.1` - Import sorting
- `Nuitka==2.7.6` - Python compiler for distribution

## Project Structure

```
data-upload/
├── data_upload/           # Main application package
│   ├── app/              # Core application logic
│   │   ├── azcopy.py     # Azure copy utilities
│   │   ├── init.py       # Initialization routines
│   │   └── login.py      # Authentication logic
│   ├── euphrosyne/       # Euphrosyne API client
│   │   ├── auth.py       # Authentication utilities
│   │   └── project.py    # Project management
│   ├── widget/           # GUI components
│   │   ├── context_box.py    # Context selection widget
│   │   ├── data_location.py  # File/folder selection
│   │   ├── data_type.py      # Data type selection
│   │   ├── data_upload.py    # Main upload widget
│   │   ├── login.py          # Login dialog
│   │   └── text_edit_stream.py # Output stream widget
│   ├── config.py         # Configuration management
│   ├── data_upload.py    # Core upload functionality
│   ├── gui.py            # Main GUI entry point
│   └── main.py           # (Legacy - use gui.py)
├── requirements/         # Dependency files
│   ├── base.txt          # Runtime dependencies
│   └── dev.txt           # Development dependencies
├── assets/              # Application resources
│   └── icon.png         # Application icon
├── config.yml           # Configuration file
├── setup.cfg            # Python package configuration
├── Makefile            # Build automation
└── LICENSE             # AGPL-3.0 license
```

## Building for Distribution

Create a standalone executable using pyinstaller:

### Windows

```bash
 pyinstaller --add-data "assets/icon.png:assets" --name "Euphrosyne Herma" --add-data "config.yml:." --add-data "bin/*:bin" --windowed --icon assets/icon.ico data_upload/gui.py
```

### Mac

```bash
pyinstaller --add-data "assets/icon.png:assets" --name "Euphrosyne Herma" --add-data "config.yml:." --add-data "bin/*:bin" --windowed --icon assets/icon.icns data_upload/gui.py
```

This creates an executable with all dependencies bundled in a related folder.

## License

This project is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0). See the [LICENSE](LICENSE) file for details.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run code formatting: `make format`
5. Check code style: `make style`
6. Test your changes
7. Submit a pull request

## Support

For issues and questions, please create an issue in the project repository.
