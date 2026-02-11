from __future__ import annotations

from datetime import datetime, timezone
from typing import Any

from fastapi import FastAPI

app = FastAPI(title="ACM FE+BE Workshop API")


def compute_next_widget_value() -> str:
    """
    Workshop TODO (fill this in later):
    - For now, this does nothing.
    - Later, you can compute something dynamic (random number, uptime, etc.).
    """
    return "Not implemented yet"  # TODO: implement later


@app.get("/api/status")
async def get_status() -> dict[str, Any]:
    """
    Returns plain JSON (a Python dict).
    FastAPI automatically serializes dicts to JSON responses by default.
    """
    now = datetime.now(timezone.utc).isoformat()

    # You can change this data during the workshop and see the UI update.
    return {
        "title": "ACM Dashboard",
        "updatedAt": now,
        "theme": {
            "accent": "#7c3aed",  # purple
        },
        "widgets": [
            {
                "id": "welcome",
                "label": "Welcome",
                "value": "Hello ACM!",
            },
            {
                "id": "server_time",
                "label": "Server time (UTC)",
                "value": now,
            },
            {
                "id": "todo",
                "label": "TODO function",
                "value": "Not implemented yet",
                "hint": "Fill in compute_next_widget_value() later",
            },
            # WORKSHOP TODO (Task 1): Add your own widget here!
            # Example:
            # {
            #     "id": "my_widget",
            #     "label": "My Custom Widget",
            #     "value": "Hello World!",
            #     "hint": "This is my new widget"
            # },
        ],
    }
